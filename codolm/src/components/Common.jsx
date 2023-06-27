import React, { useState } from 'react';
import { ButtonContainer } from './Common.style';
import { Link } from "react-router-dom";

export default function CommonButton({ path, name }) {
    return (
        <ButtonContainer><Link to={path}>{name}</Link></ButtonContainer>
    )
}