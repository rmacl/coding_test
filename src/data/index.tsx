export type dataProps = {
    count: number;
    text: string;
}
// make dummy string data
export const dataList = (props: dataProps): string[] => {
    let data = [];
    while (props.count >= 0) {
        data.push(props.count + 'th : ' + props.text);
        props.count--;
    }
    return data;
}

