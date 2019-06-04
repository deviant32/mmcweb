import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Head from 'next/head';
import Meta from '../components/widgets/Meta';
import Header from '../components/views/partials/header'
import UserContext from '../components/hooks/context';
import '../styles/base.scss';
import Footer from '../components/views/partials/footer';


const Team = () => {

  const [user, setUser] = useContext(UserContext);

  return (
    <Meta>
      <Head>
        <title>Team</title>
      </Head>
      <Header />
      <Container style={{ minHeight: 400 }}>
        <Row>
          <Col xs="12">
            <p>Team</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum rhoncus libero. Maecenas quis tristique quam. Suspendisse consectetur tortor nisl. Nunc ultrices lacinia tempor. Morbi vel sapien consectetur, varius velit suscipit, egestas risus. Integer efficitur, massa et convallis vulputate, nisl dui ullamcorper odio, eu faucibus sem mauris sit amet nisl. Quisque dictum nunc metus, eget hendrerit libero hendrerit at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin dictum porttitor velit ac accumsan. Maecenas porttitor aliquam ex, in rutrum tortor finibus at. Etiam commodo risus at dictum lacinia. Duis sollicitudin sollicitudin luctus.

              Ut posuere feugiat mi, sed convallis lacus dapibus eget. Aliquam in erat egestas, faucibus nibh ac, vulputate ipsum. Mauris sit amet est vitae ante sollicitudin aliquet sit amet ut ipsum. Ut non erat tempor, ornare ex at, scelerisque odio. Donec risus augue, ullamcorper auctor porttitor nec, interdum eget sem. Morbi posuere dolor fringilla nisi consequat, ut gravida quam vehicula. Ut leo magna, viverra id euismod ac, aliquam in est. Vivamus at risus ut ex eleifend scelerisque ut eu justo. Proin nec lorem nec nunc rhoncus efficitur.

              Praesent id nisi hendrerit, accumsan lacus in, fermentum lacus. Fusce nec pharetra lectus. Etiam faucibus finibus ligula, at mattis augue gravida vel. Aliquam molestie maximus placerat. Cras quis urna tellus. Morbi nec justo sagittis, molestie augue id, cursus sapien. Morbi nisl nisl, aliquet a nunc et, hendrerit hendrerit sapien. Morbi lacus erat, pretium a auctor et, varius a metus. Fusce elit orci, interdum vel magna quis, lobortis scelerisque nulla. Morbi id rhoncus nisi. Nulla placerat tellus vitae magna porta, non bibendum sapien pulvinar.

              Ut neque leo, laoreet vel tempus id, dignissim ac turpis. Suspendisse placerat porta erat, quis molestie sem lacinia vitae. Sed in finibus est. Maecenas pharetra massa magna, vitae feugiat ipsum tempus nec. Pellentesque accumsan augue non neque interdum interdum. Integer non vestibulum purus. In enim turpis, sagittis et augue nec, luctus pellentesque magna. In fermentum auctor pulvinar. Fusce porta dui id enim iaculis lacinia. Vestibulum tempus neque velit, vitae mollis velit convallis sed. Nullam tempor, orci in pulvinar feugiat, neque leo malesuada nibh, eget ullamcorper purus tortor vel ligula.

              Quisque et erat ut metus aliquet lacinia. Aliquam quis augue urna. In dignissim aliquam lorem, at ultricies orci eleifend id. Donec hendrerit sodales enim et congue. Maecenas vitae risus quis quam vestibulum iaculis. Mauris arcu ipsum, aliquam sit amet interdum fringilla, iaculis vel sem. Aenean dapibus nibh quis risus blandit condimentum. Mauris dapibus blandit est id euismod. Nunc fermentum et velit quis vulputate. Ut maximus, enim vel laoreet fermentum, mauris ligula sollicitudin nibh, id accumsan lectus orci a dolor. Nullam at tristique ipsum. Donec eleifend ullamcorper eros, sit amet dictum urna congue nec. Cras ut placerat eros.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Meta>
  );
}

export default Team;
