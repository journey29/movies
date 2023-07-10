import ContentLoader from "react-content-loader"

export const MyLoader = () => (
    <ContentLoader
        speed={2}
        width={1020}
        height={420}
        viewBox="0 0 1020 420"
        backgroundColor="#fff"
        foregroundColor="#ecebeb"
    >
        <rect x="141" y="315" rx="0" ry="0" width="7" height="1" />
        <rect x="0" y="0" rx="10" ry="10" width="320" height="420" />
        <rect x="380" y="0" rx="10" ry="10" width="600" height="400" />
    </ContentLoader>
)

