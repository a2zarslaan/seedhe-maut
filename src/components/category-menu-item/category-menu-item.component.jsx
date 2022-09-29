import './category-menu-item.styles.scss'

const CategoryMenuItem = ({category}) => {
    const {title, imageUrl} = category;
    return (
        <div className="category-menu-item-container">
            <div className="background-image" style={{
              backgroundImage: `url(${imageUrl})`
            }} />
            <div className="body">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
    )
}

export default CategoryMenuItem