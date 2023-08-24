import React, { useState, useCallback } from 'react'
import PropTypes from "prop-types";
import {PlusOutlined} from '@ant-design/icons'
import ImagesZoom from "./ImagesZoom";

const PostImages = ({images}) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);
    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, [])
    const onClose = useCallback(()=>{
        setShowImagesZoom(false);
    }, [])
    if(images.length === 1){
        return (
            <>
                <img role='presentation' src={images[0].src} alt={images[0].src} onClick={onZoom} />
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
            </>
        )
    }
    if(images.length === 2){
        return (
            <>
                <img role='presentation' style={{width:"50%", display: 'inline-block'}} src={images[0].src} alt={images[0].src} onClick={onZoom} />
                <img role='presentation' style={{width:"50%", display: 'inline-block'}} src={images[1].src} alt={images[1].src} onClick={onZoom} />
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
            </>
        )
    }
  return (
    <>
        <div style={{ display: 'flex' }}>
                <img role='presentation' width="50%" src={images[0].src} alt={images[0].src} onClick={onZoom} />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', width: '50%' }} onClick={onZoom}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <PlusOutlined style={{ fontSize: '2rem' }} />
                        <br />
                        {images.length - 1}
                        개의 사진 더보기
                    </div>
                </div>
            </div>
            {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
    </>
  )
}
PostImages.PropTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
}
export default PostImages