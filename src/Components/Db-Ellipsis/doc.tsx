import * as React from 'react';
import { Divider } from 'antd';
import Component from './index';

const text = `冥有鱼，其名为鲲。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也；怒而飞，其翼若垂天之云。是鸟也，海运则将徙于南冥。南冥者，天池也。《齐谐》者，志怪者也。《谐》之言曰：“鹏之徙于南冥也，水击三千里，抟扶摇而上者九万里，去以六月息者也。”野马也，尘埃也，生物之以息相吹也。天之苍苍，其正色邪？其远而无所至极邪？其视下也，亦若是则已矣。且夫水之积也不厚，则其负大舟也无力。覆杯水于坳堂之上，则芥为之舟，置杯焉则胶，水浅而舟大也。风之积也不厚，则其负大翼也无力。故九万里，则风斯在下矣，而后乃今培风；背负青天，而莫之夭阏者，而后乃今将图南。蜩与学鸠笑之曰：“我决起而飞，抢榆枋而止，时则不至，而控于地而已矣，奚以之九万里而南为？”适莽苍者，三餐而反，腹犹果然；适百里者，宿舂粮；适千里者，三月聚粮。之二虫又何知！
小知不及大知，小年不及大年。奚以知其然也？朝菌不知晦朔，蟪蛄不知春秋，此小年也。楚之南有冥灵者，以五百岁为春，五百岁为秋；上古有大椿者，以八千岁为春，八千岁为秋，此大年也。而彭祖乃今以久特闻，众人匹之，不亦悲乎！汤之问棘也是已。穷发之北，有冥海者，天池也。有鱼焉，其广数千里，未有知其修者，其名为鲲。有鸟焉，其名为鹏，背若泰山，翼若垂天之云，抟扶摇羊角而上者九万里，绝云气，负青天，然后图南，且适南冥也。斥鴳笑之曰：“彼且奚适也？我腾跃而上，不过数仞而下，翱翔蓬蒿之间，此亦飞之至也。而彼且奚适也？”此小大之辩也。
故夫知效一官，行比一乡，德合一君，而征一国者，其自视也，亦若此矣。而宋荣子犹然笑之。且举世誉之而不加劝，举世非之而不加沮，定乎内外之分，辩乎荣辱之境，斯已矣。彼其于世，未数数然也。虽然，犹有未树也。夫列子御风而行，泠然善也，旬有五日而后反。彼于致福者，未数数然也。此虽免乎行，犹有所待者也。若夫乘天地之正，而御六气之辩，以游无穷者，彼且恶乎待哉？故曰：至人无己，神人无功，圣人无名。`;

export default class Doc extends React.Component<any, any> {
  public render() {
    return (
      <div style={{ width: 500 }}>
        <h3>文字省略组件</h3>
        <p>控制文字数量的省略</p>
        <Component length={5}>{text}</Component>
        <Divider />
        <p>单行文字溢出省略</p>
        <Component lines={1}>{text}</Component>
        <Divider />
        <p>多行文字溢出隐藏</p>
        <Component lines={3}>{text}</Component>
        <Divider />
        <p>多行文字混合限制文字数量溢出隐藏</p>
        <Component lines={3} length={90}>
          {text}
        </Component>
      </div>
    );
  }
}
