import { Container, Icon, Title } from "./styles";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
