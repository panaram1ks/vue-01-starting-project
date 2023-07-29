import { ref } from 'vue';

export default function useAlert(startingVisibilityDefault = false) {
    const alertIsVisible = ref(startingVisibilityDefault);

    function showAlert() {
        alertIsVisible.value = true;
    }
    function hideAlert() {
        alertIsVisible.value = false;
    }

    // return {
    //   alertIsVisible,
    //   showAlert,
    //   hideAlert
    // };
    return [alertIsVisible, showAlert, hideAlert]
}