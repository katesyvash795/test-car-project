import React from 'react';
import { Button,TopText,Container, ContainerText,Text,Model,Сharacteristic, СharacteristicDiv,BottomText,Heart, StyledImage} from './CardStyled';

export const CardItem =({car})=>{
    return(
<>
                <Container>
                    <StyledImage src="" alt="" width={274} height={268}/>
                    <Heart >
                        </Heart>
        <ContainerText>
                    <TopText>
                        <Text> <Model>Ukraine</Model>,<span>Ukraine</span></Text>
                        <Text></Text>
                    </TopText>
                    <BottomText>
        <СharacteristicDiv>
                            <Сharacteristic> Ukraine </Сharacteristic> 
                            <Сharacteristic> Ukraine </Сharacteristic>
                            <Сharacteristic> Ukraine </Сharacteristic>
                            <Сharacteristic> Premium  </Сharacteristic>
        </СharacteristicDiv> 
        <СharacteristicDiv>
                            <Сharacteristic> Ukraine  </Сharacteristic> 
                            <Сharacteristic> Ukraine </Сharacteristic>
                            <Сharacteristic>uiuiyuiyyui</Сharacteristic>
                            <Сharacteristic> Ukraine </Сharacteristic>
        </СharacteristicDiv> 
                    </BottomText>
        </ContainerText>
                <Button>Learn more</Button>
                </Container>      
</>
);

}