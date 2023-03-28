package com.brainware.neuroArt.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public record OpenApiImageDTO(
        @JsonProperty("created") long created,
        @JsonProperty("data") OpenApiUrlData[] data) {
}

