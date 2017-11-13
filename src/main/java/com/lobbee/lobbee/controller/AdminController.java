package com.lobbee.lobbee.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.lobbee.lobbee.TruncateDatabaseService;
import com.lobbee.lobbee.domain.DataHandler;
import com.lobbee.lobbee.domain.product.Product;
import com.lobbee.lobbee.domain.product.repository.CategoryRepository;
import com.lobbee.lobbee.domain.product.repository.ProductRepository;
import com.lobbee.lobbee.domain.store.LobbeeStore;
import com.lobbee.lobbee.domain.store.LobbeeStoreStock;
import com.lobbee.lobbee.domain.store.repository.LobbeeStoreRepository;
import com.lobbee.lobbee.domain.store.repository.LobbeeStoreStockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import static io.vavr.collection.Stream.*;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin
class AdminController {

    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private LobbeeStoreRepository storeRepository;
    @Autowired
    private LobbeeStoreStockRepository stockRepository;
    @Autowired
    private TruncateDatabaseService truncateDatabaseService;

    @PersistenceContext
    private EntityManager entityManager;

    AdminController() {}

    @PostMapping("/upload")
    @Transactional
    public ResponseEntity<String> singleFileUpload(@RequestParam("file") MultipartFile file,
                                                   RedirectAttributes redirectAttributes) throws IOException {

        if (file.isEmpty()) {
            redirectAttributes.addFlashAttribute("message", "Please select a file to upload");
            return ResponseEntity
                        .status(HttpStatus.EXPECTATION_FAILED)
                        .body("FAIL to upload " + file.getOriginalFilename() + "!");

        }


        // Get the file and save it somewhere
        byte[] bytes = file.getBytes();
//        Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
//        Files.write(path, bytes);

        ObjectMapper objectMapper = new ObjectMapper();
        DataHandler dataHandler = objectMapper.readValue(bytes, DataHandler.class);

        truncateDatabaseService.truncate();

        categoryRepository.save(dataHandler.getCategories());
        storeRepository.save(ofAll(dataHandler.getStores()).map(LobbeeStore::fromDto));
        productRepository.save(ofAll(dataHandler.getProducts()).map(p -> Product.fromJsonDto(p, categoryRepository)));
        stockRepository.save(ofAll(dataHandler.getStocks())
                                .map(sk -> LobbeeStoreStock.fromJsonDto(sk, storeRepository, productRepository)));

        redirectAttributes.addFlashAttribute("message",
                "You successfully uploaded '" + file.getOriginalFilename() + "'");


        return ResponseEntity.status(HttpStatus.OK).body("You successfully uploaded " + file.getOriginalFilename() + "!");
    }

    @GetMapping("/uploadStatus")
    public String uploadStatus() {
        return "uploadStatus";
    }

}