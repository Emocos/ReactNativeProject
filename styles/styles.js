import styled from "styled-components/native";

export const MyInput = styled.TextInput`
  border: 1px solid #414141;
  width: 250px;
  height: 40px;
  text-align: center;
  border-radius: 5px;
  margin: 10px 0;
`;

export const MyContainer = styled.View`
  margin: 15px;
  padding: 25px;
  height: 300px;
  border: 1px solid black;
  border-radius: 15px;
  background-color: rgba(220, 246, 246, 0.34);
  align-items: center;
  justify-content: center;
`;

export const MyTitle = styled.Text`
  font-size: 24px;
  font-weight: 600;
  margin: 15px 0;
  color: #414141;
`;

export const MyAvatar = styled.Image`
  width: 115px;
  height: 115px;
  border-radius: 100%;
  margin: 15px 0;
`;

export const MyButton = styled.Pressable`
  height: 45px;
  background-color: inherit;
  border: 1px solid #414141;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 15px 0;
`;
