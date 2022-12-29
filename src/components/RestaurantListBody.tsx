import styled from "styled-components";

const BodyLayout = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 10px;
  width: 95%;
  height: 100%;
  min-height: 600px;
  background-color: white;
  font-family: ${({theme}) => theme.font.dongle};;
  margin-bottom: 20px;
`
const MarginCollapseBreaker = styled.hr`
  height: 0px;
  margin: 0px;
  border: 0px;
  padding-bottom: 1px;
  background-color: ${({theme}) => theme.color.main};;
  color: ${({theme}) => theme.color.main};;
`
const RestaurantItem = styled.div`
  //margin-left: 10px;
  padding-left: 10px;
  border-bottom: 1px solid black;
  border-radius: 10px 10px 0px 0px;

  :hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.color.categoryOddBlock};;
    transition: all 0.5s;
  }
`
const RestaurantItemTitle = styled.div`
  font-size: 30px;
`
const RestaurantItemTags = styled.div`
  font-size: 20px;
  display: flex;

  > span {
    margin-right: 5px;
  }
`

interface restaurant {
    name: string;
    tags: tag[];
}

interface tag {
    name: string;
}

export default function RestaurantListBody() {

    const data: restaurant[] = [
        {
            name: "엄마손 닭갈비", tags: [
                {name: "#한식"}, {name: "#치킨조아"}, {name: "#응용 회식"}, {name: "#김정호 교수님 원픽"}
            ]
        }
        , {
            name: "모래내 곱창", tags: [
                {name: "#한식"}, {name: "#JMT"}
            ]
        },
        {
            name: "돼지주막", tags: [
                {name: "#한식"}, {name: "#백반"}, {name: "#7000원"}, {name: "#3대 남자음식"}
            ]
        },
        {
            name: "영순이네", tags: [
                {name: "#한식"}, {name: "#닭볶음탕"}, {name: "#안주"}
            ]
        },
        {
            name: "김밥천국", tags: [
                {name: "#한식"}, {name: "#김밥"}, {name: "#비빔밥"}, {name: "#5000원"}
            ]
        },
        {
            name: "엄마손 닭갈비", tags: [
                {name: "#한식"}, {name: "#치킨조아"}, {name: "#응용 회식"}, {name: "#김정호 교수님 원픽"}
            ]
        }
        , {
            name: "모래내 곱창", tags: [
                {name: "#한식"}, {name: "#JMT"}
            ]
        },
        {
            name: "돼지주막", tags: [
                {name: "#한식"}, {name: "#백반"}, {name: "#7000원"}, {name: "#3대 남자음식"}
            ]
        },
        {
            name: "영순이네", tags: [
                {name: "#한식"}, {name: "#닭볶음탕"}, {name: "#안주"}
            ]
        },
        {
            name: "김밥천국", tags: [
                {name: "#한식"}, {name: "#김밥"}, {name: "#비빔밥"}, {name: "#5000원"}
            ]
        }
    ]
    return <>
        <BodyLayout>
            {data.map(r => {
                return <RestaurantItem>
                    <RestaurantItemTitle>{r.name}</RestaurantItemTitle>
                    <RestaurantItemTags>
                        {r.tags.map(t => {
                            return <span>{t.name}</span>
                        })}
                    </RestaurantItemTags>
                </RestaurantItem>
            })}


        </BodyLayout>
        <MarginCollapseBreaker/>
    </>
}