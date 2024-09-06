import './SingleImagePreview.css'
import { useParams } from "react-router-dom"
import { getImageById } from "../../../utils/functions/getImageFromId";
import NavBar from '../../elements/NavBar/NavBar';
import { useNavScroll } from '../../../utils/hooks/useNavScroll';


const SingleImagePreview = () => {
  const id = useParams().id;
  const imageObject = getImageById(id)
  const { titleSize, navPos, navGap, navHeight, navTop, titleBottom } = useNavScroll(false)
  return (
    <>
      <NavBar
        titleSize={titleSize}
        navPos={navPos}
        navGap={navGap}
        navHeight={navHeight}
        navTop={navTop}
        titleBottom={titleBottom}
      />
      <main>
      <div className="image-preview">
        <img src={imageObject.url} alt={imageObject.id} />
      </div>
      </main>
    </>
  );
}

export default SingleImagePreview