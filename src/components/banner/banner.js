import './banner.scss'
export default function Banner({bannerImage}){
    const gradient = 'linear-gradient(rgba(171, 171, 171, 0.14), #000000eb)'
    const bannerUrl = `url("${bannerImage}")`
    console.log(bannerUrl)
    return(
        <div className="banner" style={{'background': `${gradient}, ${bannerUrl}`} } >
        </div>
    )
}