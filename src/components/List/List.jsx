import { Video } from "./Video/Video";
import { Article } from "./Article/Article";
import { Popular } from "./Popular/Popular";
import { New } from "./New/New";

export const List = ({list}) => {
  return list.map(item => {
    const {views, type} = item;
    const component =  type === 'video' ? <Video {...item} /> : <Article {...item} />;

    if (views > 1000) {
      return <Popular>
        {component}
      </Popular>
    } 

    if (views < 100) {
      return <New>
        {component}
      </New>
    }

    return component;
  });
}
