import './banner.scss'
export default function Banner(){
    const gradient = 'linear-gradient(rgba(171, 171, 171, 0.14), #000000eb)'
    const bannerUrl = 'url("https://s4.anilist.co/file/anilistcdn/media/anime/banner/11061-8WkkTZ6duKpq.jpg")'
    return(
        <div className="banner" style={{'background': `${gradient}, ${bannerUrl}`} } >
        </div>
    )
}