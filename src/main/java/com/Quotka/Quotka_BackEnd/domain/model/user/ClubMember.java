package com.Quotka.Quotka_BackEnd.domain.model.user;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class ClubMember extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userId")
    private Long userId;

    @Column(length = 50)
    private String email;

    @Column(length = 100)
    private String password;

    @Column(length = 30)
    private String name;

    private boolean fromSocial;

    @ElementCollection(fetch = FetchType.LAZY)
    private Set<ClubMemberRole> roleSet;

    public void addMemberRole(ClubMemberRole clubMemberRole){
        roleSet.add(clubMemberRole);
    }

}