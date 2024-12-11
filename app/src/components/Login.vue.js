import { ref } from 'vue';
import { useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const username = ref('');
const password = ref('');
const showProgress = ref(false);
const errorMessage = ref('');
const login = () => {
    showProgress.value = true;
    setTimeout(() => {
        if (username.value === 'admin' && password.value === 'admin123') {
            // Save a token to indicate the user is logged in
            localStorage.setItem('token', 'dummy_token');
            router.push('/');
        }
        else {
            errorMessage.value = 'Invalid username or password';
        }
        showProgress.value = false;
    }, 1000); // Simulate a delay for login process
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("sticky-top custom-navbar") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VAppBar;
    /** @type { [typeof __VLS_components.VAppBar, typeof __VLS_components.vAppBar, typeof __VLS_components.VAppBar, typeof __VLS_components.vAppBar, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("bg-white") }, density: ("default"), elevation: ((0)), ...{ style: ({}) }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("bg-white") }, density: ("default"), elevation: ((0)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.VAppBarTitle;
    /** @type { [typeof __VLS_components.VAppBarTitle, typeof __VLS_components.vAppBarTitle, typeof __VLS_components.VAppBarTitle, typeof __VLS_components.vAppBarTitle, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.VImg;
    /** @type { [typeof __VLS_components.VImg, typeof __VLS_components.vImg, typeof __VLS_components.VImg, typeof __VLS_components.vImg, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ src: ("../assets/images/logo.png"), ...{ style: ({}) }, }));
    const __VLS_14 = __VLS_13({ src: ("../assets/images/logo.png"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.VMain;
    /** @type { [typeof __VLS_components.VMain, typeof __VLS_components.vMain, typeof __VLS_components.VMain, typeof __VLS_components.vMain, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ fluid: (true), }));
    const __VLS_26 = __VLS_25({ fluid: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ class: ("d-flex justify-center align-center") }, ...{ style: ({}) }, }));
    const __VLS_32 = __VLS_31({ ...{ class: ("d-flex justify-center align-center") }, ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ cols: ("6"), }));
    const __VLS_38 = __VLS_37({ cols: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.VCard;
    /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ] } */
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
    const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
    const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.VCardTitle;
    /** @type { [typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ] } */
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ class: ("text-center") }, }));
    const __VLS_50 = __VLS_49({ ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    __VLS_nonNullable(__VLS_53.slots).default;
    var __VLS_53;
    const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.VCardText;
    /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({}));
    const __VLS_56 = __VLS_55({}, ...__VLS_functionalComponentArgsRest(__VLS_55));
    const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.VForm;
    /** @type { [typeof __VLS_components.VForm, typeof __VLS_components.vForm, typeof __VLS_components.VForm, typeof __VLS_components.vForm, ] } */
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{ 'onSubmit': {} }, }));
    const __VLS_62 = __VLS_61({ ...{ 'onSubmit': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    let __VLS_66;
    const __VLS_67 = {
        onSubmit: (__VLS_ctx.login)
    };
    let __VLS_63;
    let __VLS_64;
    const __VLS_68 = __VLS_resolvedLocalAndGlobalComponents.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ label: ("Username"), type: ("text"), modelValue: ((__VLS_ctx.username)), prependIcon: ("mdi-account"), required: (true), }));
    const __VLS_70 = __VLS_69({ label: ("Username"), type: ("text"), modelValue: ((__VLS_ctx.username)), prependIcon: ("mdi-account"), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    const __VLS_74 = __VLS_resolvedLocalAndGlobalComponents.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */
    // @ts-ignore
    const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ label: ("Password"), type: ("password"), modelValue: ((__VLS_ctx.password)), prependIcon: ("mdi-lock"), required: (true), }));
    const __VLS_76 = __VLS_75({ label: ("Password"), type: ("password"), modelValue: ((__VLS_ctx.password)), prependIcon: ("mdi-lock"), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
    const __VLS_80 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
    // @ts-ignore
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...{ class: ("d-flex justify-center") }, }));
    const __VLS_82 = __VLS_81({ ...{ class: ("d-flex justify-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    const __VLS_86 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ cols: ("auto"), }));
    const __VLS_88 = __VLS_87({ cols: ("auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
    const __VLS_92 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({ color: ("primary"), type: ("submit"), block: (true), }));
    const __VLS_94 = __VLS_93({ color: ("primary"), type: ("submit"), block: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
    __VLS_nonNullable(__VLS_97.slots).default;
    var __VLS_97;
    __VLS_nonNullable(__VLS_91.slots).default;
    var __VLS_91;
    __VLS_nonNullable(__VLS_85.slots).default;
    var __VLS_85;
    __VLS_nonNullable(__VLS_65.slots).default;
    var __VLS_65;
    if (__VLS_ctx.errorMessage) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("error-message") }, });
        (__VLS_ctx.errorMessage);
    }
    __VLS_nonNullable(__VLS_59.slots).default;
    var __VLS_59;
    __VLS_nonNullable(__VLS_47.slots).default;
    var __VLS_47;
    __VLS_nonNullable(__VLS_41.slots).default;
    var __VLS_41;
    __VLS_nonNullable(__VLS_35.slots).default;
    var __VLS_35;
    __VLS_nonNullable(__VLS_29.slots).default;
    var __VLS_29;
    __VLS_nonNullable(__VLS_23.slots).default;
    var __VLS_23;
    const __VLS_98 = __VLS_resolvedLocalAndGlobalComponents.VFooter;
    /** @type { [typeof __VLS_components.VFooter, typeof __VLS_components.vFooter, typeof __VLS_components.VFooter, typeof __VLS_components.vFooter, ] } */
    // @ts-ignore
    const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({ ...{ class: ("bg-green-lighten-1") }, ...{ style: ({}) }, }));
    const __VLS_100 = __VLS_99({ ...{ class: ("bg-green-lighten-1") }, ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_99));
    const __VLS_104 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
    // @ts-ignore
    const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({ justify: ("center"), noGutters: (true), }));
    const __VLS_106 = __VLS_105({ justify: ("center"), noGutters: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_105));
    const __VLS_110 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({ ...{ class: ("text-center mt-4") }, cols: ("12"), }));
    const __VLS_112 = __VLS_111({ ...{ class: ("text-center mt-4") }, cols: ("12"), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
    (new Date().getFullYear());
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    __VLS_nonNullable(__VLS_115.slots).default;
    var __VLS_115;
    __VLS_nonNullable(__VLS_109.slots).default;
    var __VLS_109;
    __VLS_nonNullable(__VLS_103.slots).default;
    var __VLS_103;
    if (__VLS_ctx.showProgress) {
        const __VLS_116 = __VLS_resolvedLocalAndGlobalComponents.VProgressCircular;
        /** @type { [typeof __VLS_components.VProgressCircular, typeof __VLS_components.vProgressCircular, typeof __VLS_components.VProgressCircular, typeof __VLS_components.vProgressCircular, ] } */
        // @ts-ignore
        const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({ size: ((100)), width: ((7)), color: ("green"), indeterminate: (true), ...{ class: ("progress-overlay") }, }));
        const __VLS_118 = __VLS_117({ size: ((100)), width: ((7)), color: ("green"), indeterminate: (true), ...{ class: ("progress-overlay") }, }, ...__VLS_functionalComponentArgsRest(__VLS_117));
    }
    __VLS_styleScopedClasses['sticky-top'];
    __VLS_styleScopedClasses['custom-navbar'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['align-center'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['error-message'];
    __VLS_styleScopedClasses['bg-green-lighten-1'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['progress-overlay'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            username: username,
            password: password,
            showProgress: showProgress,
            errorMessage: errorMessage,
            login: login,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
