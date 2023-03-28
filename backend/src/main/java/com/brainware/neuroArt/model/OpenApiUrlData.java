package com.brainware.neuroArt.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public record OpenApiUrlData(
        @JsonProperty("url") String url
) {
}
