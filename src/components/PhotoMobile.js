import styled from "styled-components";
import styles from "../assets/styles";
export const PhotoMobile = ({ img, title, context }) => {
  return (
    <Container>
      <ImageHolder src={img} />
      <Body>
        <Title>{title}</Title>
        <Content>{context}</Content>
      </Body>
    </Container>
  );
};

export default PhotoMobile;

const Container = styled.div`
  height: 350px;
  width: 450px;
  background-color: ${styles.white};
  box-sizing: content-box;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  padding: 0px;
  margin: 6px;
`;

const ImageHolder = styled.img`
  width: 187px;
  height: 333px;
  object-fit: fill;
  border-radius: 20px;
  border: 2px solid ${styles.light};
  margin: 9px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const Body = styled.div`
  height: 108px;
  background-color: ${styles.white};
  padding: 0px 21px;
  align-self: start;
  padding: 13px 21px;
  border-radius: 20px;
`;
const Title = styled.h5`
  font-size: 1.125rem;
  font-family: ${styles.bold};
  color: ${styles.cherry};
  margin: 0px;
`;
const Content = styled.p`
  font-size: 1rem;
  font-family: ${styles.regular};
  color: ${styles.light};
  margin: 0px;
`;
