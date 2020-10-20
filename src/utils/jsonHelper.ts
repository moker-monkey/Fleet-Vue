export const isJSON = (str: string): boolean | undefined => {
    // 验证JSON字符串，而不是object
    if (typeof str === 'string') {
        try {
            JSON.parse(str);

            return true;
        } catch (e) {
            console.log('error：' + str + '!!!' + e);
            return false;
        }
    }
    console.log('It is not a string!')
}
