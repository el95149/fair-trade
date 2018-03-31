package org.anagnostic.fairtrade.listener;

import org.anagnostic.fairtrade.model.BaseEntity;
import org.anagnostic.fairtrade.security.CustomUserDetails;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.rest.core.event.AbstractRepositoryEventListener;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.UUID;

@Component
public class RepositoryeEventListener extends AbstractRepositoryEventListener<Object> {
    private static final Logger log = LoggerFactory.getLogger(RepositoryeEventListener.class);

    /**
     * Auto-set meta-data common between all entities, when updating
     * @param entity the model entity to process
     */
    @Override
    public void onBeforeSave(Object entity) {

        log.debug("Event BeforeSave for entity: " + entity.getClass().getSimpleName());
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (entity instanceof BaseEntity) {
            if (auth != null && auth.isAuthenticated() && auth.getPrincipal() instanceof CustomUserDetails) {
                CustomUserDetails u = (CustomUserDetails) auth.getPrincipal();
                ((BaseEntity) entity).setUpdateUser(u.getId());
            } else {
                ((BaseEntity) entity).setUpdateUser(0L); //use a 'static' ID
            }
            ZonedDateTime utc = ZonedDateTime.now(ZoneOffset.UTC);
            ((BaseEntity) entity).setUpdateDate(Timestamp.from(utc.toInstant()));
        } else {
            // throw exception ??
            log.debug("Not an {} object but {}", BaseEntity.class, entity.getClass());
        }
    }

    /**
     * Auto-set meta-data common between all entities, when creating a new one
     * @param entity the model entity to process
     */
    @Override
    protected void onBeforeCreate(Object entity) {
        log.debug("Event BeforeCreate for entity: " + entity.getClass().getSimpleName());
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (entity instanceof BaseEntity) {
            BaseEntity baseEntity = (BaseEntity) entity;
            if (auth != null && auth.isAuthenticated() && auth.getPrincipal() instanceof CustomUserDetails) {
                CustomUserDetails u = (CustomUserDetails) auth.getPrincipal();
                baseEntity.setCreateUser(u.getId());
            } else {
                baseEntity.setCreateUser(0L); //use a 'static' UUID
            }
            baseEntity.setUpdateUser(baseEntity.getCreateUser());
            baseEntity.setIsActive(Boolean.TRUE);
            ZonedDateTime utc = ZonedDateTime.now(ZoneOffset.UTC);
            baseEntity.setCreateDate(Timestamp.from(utc.toInstant()));
            baseEntity.setUpdateDate(baseEntity.getCreateDate());
        } else {
            // throw exception ??
            log.debug("Not an {} object but {}", BaseEntity.class, entity.getClass());
        }
    }
}