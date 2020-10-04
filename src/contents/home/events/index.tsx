import React from "react"

import * as S from './styles'

export default () => {
    return (
        <S.Wrapper>
            <S.Column>
                <S.Title>Předchozí akce</S.Title>
                <S.Row>
                    <S.RowBadge>
                        <S.RowBadgeText>2.</S.RowBadgeText>
                        <S.RowBadgeSubText>září</S.RowBadgeSubText>
                    </S.RowBadge>
                    <S.RowDesc>
                        <S.RowDescText>ONDRÁŠOVKA CUP</S.RowDescText>
                        <S.RowDescSubText>Praha - 18:00</S.RowDescSubText>
                    </S.RowDesc>
                </S.Row>
                <S.Row>
                    <S.RowBadge>
                        <S.RowBadgeText>2.</S.RowBadgeText>
                        <S.RowBadgeSubText>září</S.RowBadgeSubText>
                    </S.RowBadge>
                    <S.RowDesc>
                        <S.RowDescText>ONDRÁŠOVKA CUP</S.RowDescText>
                        <S.RowDescSubText>Praha - 18:00</S.RowDescSubText>
                    </S.RowDesc>
                </S.Row>
            </S.Column>
            <S.Column>
                <S.Title>Následující akce</S.Title>
                <S.Row>
                    <S.RowBadge>
                    <S.RowBadgeText>2.</S.RowBadgeText>
                        <S.RowBadgeSubText>září</S.RowBadgeSubText>
                    </S.RowBadge>
                    <S.RowDesc>
                        <S.RowDescText>ONDRÁŠOVKA CUP</S.RowDescText>
                        <S.RowDescSubText>Praha - 18:00</S.RowDescSubText>
                    </S.RowDesc>
                </S.Row>
            </S.Column>
        </S.Wrapper>
    )
}