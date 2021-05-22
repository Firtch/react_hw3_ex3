import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";

export class MyComponent extends React.Component {

  data = {
    ONE: {
      title: "В Иране начали продавать еще одну модель УАЗ",
      desc: "Мария Евдокимова Отечественный УАЗ расширяет свою линейку на рынке Ирана. Как сообщает дистрибьютор Soroush Diesel Mabna в Instagram, в стране запустили продажи уже второй модели после «Патриота» – «Пикапа», стоимость которого составляет 21 тысячу долларов или 1,55 миллиона рублей по текущему курсу.",
    },
    TWO: {
      title: "Пикапу X-класса добавили колес, но это не спасет его от отставки",
      desc: "Текущий май станет последним месяцем сборки Mercedes-Benz X-класса: пикап совершенно точно отправляют в архив. Однако тюнеры все еще продолжают обращать внимание на модель и доказывают, что из грузовика премиальной марки можно сделать что-то еще более необычное.",
    },
    THREE: {
      title: "Ford представил 571-сильный электрический пикап F-150 Lightning",
      desc: "Компания Ford представила серийный пикап F-150 с электрической силовой установкой. Машина получила приставку в названии Lightning («Молния»). Именно под таким наименования ранее продавались самые мощные версии пикапа F-150.",
    },
  };  

  constructor(props) {
    super(props);
    this.state = {
      curData: this.data["ONE"],
      txt: "someText",
    };
    this.onChangeVisibility = this.onChangeVisibility.bind(this);
  }

  

  onChangeVisibility(event) {    
    this.setState({ curData: this.data[event.target.innerText]});
  }

  render() {
    return (
      <table>
        <div>
          <ButtonGroup variant="text" aria-label="text primary button group">
            <Button onClick={this.onChangeVisibility}>
              One
            </Button>
            <Button onClick={this.onChangeVisibility}>Two</Button>
            <Button onClick={this.onChangeVisibility}>Three</Button>
          </ButtonGroup>
        </div>
        <div>
          <Card>
            <CardActionArea>
              <CardMedia
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.state.curData.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {this.state.curData.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      </table>
    );
  }
}
