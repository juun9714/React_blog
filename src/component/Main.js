import React, { Component } from 'react';
import '../public/css/Main.css'
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contents: [
                { id: 0, date: "2021.07.19", data: [{ id: 0, src: "/img/19.jpg", desc: "헤는 내 밤이 프랑시스 멀리 이름자를 하늘에는 계십니다. 가을 가난한 계집애들의 이름을 멀리 하나에 아름다운 까닭입니다. 계집애들의 애기 아이들의 아무 계십니다. 내 무엇인지 별 새워 아직 벌레는 별들을 봅니다. 내일 나는 된 오면 우는 까닭입니다. 새워 어머니 걱정도 하나 다 릴케 어머님, 계십니다." }], title: "출발하기 전날" },
                { id: 1, date: "2021.07.20", data: [{ id: 0, src: "/img/20.jpg", desc: "하나에 가슴속에 별 별에도 겨울이 못 이 애기 봅니다. 소녀들의 흙으로 가을 봅니다. 피어나듯이 노루, 속의 까닭입니다. 아무 언덕 나는 하나에 마리아 한 까닭입니다. 잠, 불러 무성할 가난한 까닭이요, 그러나 거외다. 없이 사람들의 어머니 남은 않은 묻힌 있습니다. 속의 토끼, 추억과 까닭입니다." }], title: "첫날 해운대 가는 길" },
                { id: 2, date: "2021.07.21", data: [{ id: 0, src: "/img/21.jpg", desc: "이네들은 멀리 밤이 벌레는 하나에 사랑과 오면 가슴속에 봅니다. 벌써 별 나의 하나의 마리아 풀이 계십니다. 나는 책상을 걱정도 강아지, 추억과 애기 새워 하나에 흙으로 있습니다. 나는 소녀들의 불러 나의 속의 봅니다. 둘 오면 어머님, 별 하늘에는 가슴속에 하나에 걱정도 청춘이 있습니다. 나는 릴케 겨울이 내 별빛이 하나에 별 봅니다." }, { id: 1, src: "/img/21-1.jpg", desc: "가득 하나에 새겨지는 묻힌 위에도 하나에 걱정도 별빛이 밤이 거외다. 북간도에 같이 마디씩 마리아 이름과, 소녀들의 듯합니다. 내린 계집애들의 다 때 듯합니다. 어머님, 이름자 오는 멀리 아스라히 이름을 위에도 버리었습니다. 별 내린 무덤 봅니다. 계절이 잔디가 경, 같이 계집애들의 버리었습니다." }], title: "해커톤 첫날" },
                { id: 3, date: "2021.07.22", data: [{ id: 0, src: "/img/22.jpg", desc: "까닭이요, 소녀들의 같이 별이 있습니다. 멀리 못 별빛이 둘 이름자를 계십니다. 지나고 하나에 소학교 이제 멀리 듯합니다. 사랑과 그리워 없이 별들을 무성할 이제 하나의 새겨지는 있습니다. 노루, 위에도 이름과, 토끼, 거외다." }, { id: 1, src: "/img/22-1.jpg", desc: "릴케 까닭이요, 하나에 비둘기, 별빛이 많은 내일 마디씩 까닭입니다. 딴은 이름자를 다하지 계십니다. 보고, 이제 청춘이 봅니다. 언덕 봄이 이제 멀리 있습니다. 아직 위에 지나가는 있습니다. 동경과 라이너 쉬이 했던 그리워 새워 하나에 이런 별들을 까닭입니다." }], title: "광안리" },
                { id: 4, date: "2021.07.23", data: [{ id: 0, src: "/img/23.jpg", desc: "오는 한 어머님, 청춘이 흙으로 그리고 무엇인지 걱정도 벌써 봅니다. 하나에 차 멀듯이, 새겨지는 나의 이네들은 봅니다. 흙으로 아직 것은 이국 사랑과 위에도 않은 헤일 아스라히 계십니다. 묻힌 지나가는 이름과 어머니 이름자를 별빛이 강아지, 내린 있습니다. 계집애들의 강아지, 아침이 봅니다." }, { id: 1, src: "/img/23-1.jpg", desc: "아직 이 나의 별 않은 까닭입니다. 한 별 자랑처럼 봄이 덮어 있습니다. 아무 말 했던 나의 어머님, 위에 계집애들의 나는 버리었습니다. 쓸쓸함과 밤을 패, 이름과, 둘 잔디가 별을 언덕 버리었습니다. 이름을 딴은 잔디가 까닭이요, 이 써 속의 어머님, 까닭이요, 있습니다. 계절이 이런 강아지, 하나의 오는 밤이 잠, 버리었습니다." }], title: "해커톤 최종 발표" },
                { id: 5, date: "2021.07.24", data: [{ id: 0, src: "/img/24.jpg", desc: "이름과, 내린 사랑과 시인의 써 듯합니다. 내일 나는 때 내 가슴속에 까닭입니다. 어머님, 까닭이요, 이름과, 마리아 나는 거외다. 않은 북간도에 이런 헤일 별이 계십니다. 하나에 내일 옥 보고, 추억과 별 시와 이름과, 벌써 계십니다. 이웃 내 별 위에 위에 멀듯이, 있습니다." }, { id: 1, src: "/img/24-1.jpg", desc: "덮어 가을 별들을 된 봅니다. 계집애들의 아이들의 언덕 계절이 어머니 버리었습니다. 책상을 이름과 그러나 가난한 당신은 봅니다. 가을로 한 속의 이런 어머니, 사랑과 나는 언덕 노루, 까닭입니다. 별들을 그리고 소학교 내 된 무덤 이 못 가난한 있습니다. 봄이 별 써 언덕 있습니다. 흙으로 불러 노새, 봅니다." }], title: "초량 1941 釜山 + 수민이네" }
            ]
        }
    }

    render() {
        var i = 0
        var j = 0
        var data_list = []
        var _contents
        while (i <= this.state.contents.length) {
            if (Number(this.props.date) === i) {
                _contents = this.state.contents[i]
                break
            }
            i++
        }

        while (j < _contents.data.length) {
            data_list.push(<div key={_contents.data[j].id}><img id="img" alt="something" src={_contents.data[j].src}></img><h5 id="text">{_contents.data[j].desc}</h5></div>)
            j++
        }

        return (
            <article>
                <h3 id="title">{_contents.title}</h3>
                <hr ></hr>
                <h5 id="date">{_contents.date}</h5>
                {data_list}
            </article>
        )
    }
}

export default Main