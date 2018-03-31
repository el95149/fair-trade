package org.anagnostic.fairtrade.repository;

import org.anagnostic.fairtrade.model.TradeMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.UUID;

@RepositoryRestResource
public interface TradeMessageRepository extends JpaRepository<TradeMessage, Long>{
}
