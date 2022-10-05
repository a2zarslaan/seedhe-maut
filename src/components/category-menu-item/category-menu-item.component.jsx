import { useNavigate } from 'react-router-dom';

import {CategoryMenuItemContainer, BackgroundImage, Body, Heading, Paragraph} from './category-menu-item.styles'

const CategoryMenuItem = ({category}) => {
    const {title, imageUrl, route} = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <CategoryMenuItemContainer onClick={onNavigateHandler}>
            <BackgroundImage style={{
              backgroundImage: `url(${imageUrl})`
            }} />
            <Body>
              <Heading>{title}</Heading>
              <Paragraph>Shop Now</Paragraph>
            </Body>
          </CategoryMenuItemContainer>
    )
}

export default CategoryMenuItem