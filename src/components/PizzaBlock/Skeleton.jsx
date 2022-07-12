import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className='pizza-block'
        speed={0}
        width={280}
        height={509}
        viewBox="0 0 280 509"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="136" cy="139" r="125" />
        <rect x="1" y="338" rx="10" ry="10" width="280" height="88" />
        <rect x="0" y="291" rx="10" ry="10" width="280" height="28" />
        <rect x="0" y="445" rx="10" ry="10" width="95" height="24" />
        <rect x="128" y="445" rx="20" ry="20" width="152" height="45" />
    </ContentLoader>
)

export default Skeleton