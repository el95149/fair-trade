package org.anagnostic.fairtrade.model;

import org.hibernate.validator.constraints.Email;

import javax.management.relation.Role;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Collection;

@Entity
@Table(name = "User_Tbl")
public class User extends BaseEntity {

    @Basic
    private String firstName;
    @Basic
    private String lastName;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    /**
     * Password should be encoded, skipped for simplicity's sake
     */
    @Basic
    @Size(min = 6, max=20)
    private String password;
    @Basic(optional = false)
    @NotNull
    @Email
    @Column(unique = true, nullable = false)
    private String email;
    @Basic
    private String comments;
    @Basic
    @NotNull
    @Column(nullable = false)
    private Boolean isExpired;

    @Basic(optional = false)
    @Enumerated(EnumType.STRING)
    @NotNull
    @Column(nullable = false)
    private Role role;
    @OneToMany(mappedBy = "user")
    private Collection<TradeMessage> tradeMessages;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public Boolean getExpired() {
        return isExpired;
    }

    public void setExpired(Boolean expired) {
        isExpired = expired;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Collection<TradeMessage> getTradeMessages() {
        return tradeMessages;
    }

    public void setTradeMessages(Collection<TradeMessage> tradeMessages) {
        this.tradeMessages = tradeMessages;
    }

    public enum Gender {
        MALE, FEMALE;
    }

    /**
     * Keep roles as enum, instead of in a separate table, for simplicity's sake
     */
    public enum Role {
        USER, ADMIN
    }
}
