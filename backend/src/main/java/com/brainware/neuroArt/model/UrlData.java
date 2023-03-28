package com.brainware.neuroArt.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public record UrlData(
        @JsonProperty("url") String url
) {
}
