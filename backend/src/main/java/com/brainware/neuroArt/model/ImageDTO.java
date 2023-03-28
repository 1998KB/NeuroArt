package com.brainware.neuroArt.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public record ImageDTO(
        @JsonProperty("created") long created,
        @JsonProperty("data") UrlData[] data) {
}

