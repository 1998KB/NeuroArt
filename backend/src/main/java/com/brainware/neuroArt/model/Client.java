package com.brainware.neuroArt.model;

import com.brainware.neuroArt.controller.dto.ClientDTO;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Entity
@Table(name = "client")
@Data
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String sub;
    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
    private List<Collection> collectionList = new ArrayList<>();

    public ClientDTO toDTO(Map<String, Object> claims) {
        return new ClientDTO(username, collectionList.stream().map(Collection::toDTO).toList(),
                claims.get("email").toString(),
                claims.get("picture").toString());
    }
}
