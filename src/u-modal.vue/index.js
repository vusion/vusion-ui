import Modal from 'cloud-ui.vusion/src/u-modal.vue';

export default {
    name: 'u-modal',
    extends: Modal,
    props: {
        primaryButton: { type: String, default: 'okButton' },
        disablePrimaryButton: { type: Boolean, default: false },
    },
};
