import { StyleSheet } from "react-native"
import Color from "../../utils/color"

const styles = StyleSheet.create({
    pContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.black,
        borderRadius:10,
    },
    tTitle: {
        color: Color.white
    }
})

export default styles
