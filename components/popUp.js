import React, {useState} from "react"
import {View, Text, StyleSheet, Image, ScrollView,Alert} from "react-native"
import { Modal } from "react-native-web"

export default function popUp (){
const [modalVisible, setModalVisible] = useState(false)

    return(
        <>
            <View>
                <Modal
                style = {styles.modal}
                visible = {modalVisible}
                transparant = {false}
                animationType = "none"
                onRequest ={()=>{
                    Alert.alert("test envoi data")
                    setModalVisible(!modalVisible)
                }}
                >
                    <Text style={styles.txtPopUp}>Ceci est le texte de la popUp</Text>
                </Modal>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    modal : {
        height :20,
        padding :20,
        borderRadius : 50,
        backgroundColor : "red ",
        color : "white"
    },
    txtPopUp: {
        height :50,
        padding :50,
        backgroundColor: "white",
        color : "black"
    }
})