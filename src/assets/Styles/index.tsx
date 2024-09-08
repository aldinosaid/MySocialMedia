import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 20
    },
    row: {
        flexDirection: 'row',
        gap: 10
    },
    column: {
        flexDirection: 'column',
        gap: 20
    },
    gap2: {
        gap: 2
    },
    gap4: {
        gap: 4
    },
    gap6: {
        gap: 6
    },
    gap8: {
        gap: 8
    },
    gap10: {
        gap: 10
    },
    gap12: {
        gap: 12
    },
    textDefault: {
        color: "#000000",
        fontWeight: '600'
    },
    textHeader: {
        color: "#000000",
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 5
    },
    loginButton: {
        backgroundColor: "#0065e0",
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 30,
        paddingTop: 15,
        paddingBottom: 15
    },
    createNewAccountButton: {
        backgroundColor: "#42b72b",
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 30,
        paddingTop: 15,
        paddingBottom: 15
    },
    formInput: {
        borderWidth: 1,
        padding: 15,
        borderColor: '#dbdde1',
        borderRadius: 10,
        flex: 1
    },
    nextButton: {
        backgroundColor: "#0065e0",
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 30,
        paddingTop: 15,
        paddingBottom: 15
    },
    submitText: {
        color: '#fff',
        textAlign: 'center'
    },
    textInput: {
        borderWidth: 1,
        padding: 15,
        borderColor: '#dbdde1',
        borderRadius: 10
    },
    banner: {
        width: 50,
        height: 50,
        position: 'relative',
        alignSelf: 'center',
        top: 10
    },
    bannerSection: {
        marginTop: 20,
        marginBottom: 100
    },
    postWrapper: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 10,
        marginTop: 5,
        marginBottom: 5 
    },
    profileWrapper: {
        flexDirection: 'row',
        padding: 10
    },
    postDetailWrapper: {
        flexDirection: 'column',
        paddingLeft: 15,
        gap: 8
    },
    contentWrapper: {
        padding: 10
    },
    snippetContent: {
        textAlign: 'justify'
    },
    imageContent: {
        height: 200
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50
    }
  });

export default styles;