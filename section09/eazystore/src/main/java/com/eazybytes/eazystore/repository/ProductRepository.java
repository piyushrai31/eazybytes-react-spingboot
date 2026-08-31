package com.eazybytes.eazystore.repository;

import com.eazybytes.eazystore.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // this writing here is optional as Spring Boot and Spring Data JPA will automatically recognize this.
public interface ProductRepository extends JpaRepository<Product,Long> {
}
