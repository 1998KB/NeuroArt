package com.brainware.neuroArt.mapper;

import com.brainware.neuroArt.controller.dto.ImageDTO;
import com.brainware.neuroArt.controller.dto.UrlAndIdDto;
import com.brainware.neuroArt.model.Image;

public class Mapper {

    public static Image mapToImage(UrlAndIdDto urlAndIdDto, ImageDTO imageDTO) {
        if (urlAndIdDto == null || imageDTO == null) {
            return null;
        }
        Image image = new Image();
        image.setTitle(imageDTO.title());
        image.setPrompt(imageDTO.prompt());
        image.setDescription(imageDTO.description());
        image.setId(urlAndIdDto.id());
        image.setUrl(urlAndIdDto.url());
        return image;
    }
}
