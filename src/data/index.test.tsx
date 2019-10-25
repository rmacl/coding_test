import { dataList } from './index';

test('make dummy data list as expected', () => {
    let params = { count: 5, text: 'test' };
    expect(dataList(params).length).toBe(6);
});
