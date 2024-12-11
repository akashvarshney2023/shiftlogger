import { ref, onMounted } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const search = ref("");
const shiftLogs = ref([]);
const headers = [
    { text: "Date", value: "date" },
    { text: "Shift", value: "shift" },
    { text: "In-Charge", value: "incharge" },
    { text: "Team", value: "team" },
    { text: "Line", value: "line" },
    { text: "Start Time", value: "startTime" },
    { text: "End Time", value: "endTime" },
    { text: "Breakdown Details", value: "breakdownDetails" },
    { text: "Solution", value: "solution" },
    { text: "Maintenance", value: "maintenance" },
    { text: "Remarks", value: "remarks" },
];
// Loading state to track whether the data is being fetched
const loading = ref(true);
// Fetch data from API
onMounted(async () => {
    try {
        const response = await fetch("https://api-shiftlogger-dev-001.azurewebsites.net/api/ShiftLog");
        if (!response.ok)
            throw new Error("Failed to fetch shift logs.");
        shiftLogs.value = await response.json();
    }
    catch (error) {
        console.error(error.message);
    }
    finally {
        loading.value = false; // Hide the loading spinner once the data is fetched
    }
});
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.VCard;
    /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ flat: (true), }));
    const __VLS_9 = __VLS_8({ flat: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.VCardTitle;
    /** @type { [typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ] } */
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
    const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
    __VLS_nonNullable(__VLS_18.slots).default;
    var __VLS_18;
    if (__VLS_ctx.loading) {
        const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.VProgressCircular;
        /** @type { [typeof __VLS_components.VProgressCircular, typeof __VLS_components.vProgressCircular, typeof __VLS_components.VProgressCircular, typeof __VLS_components.vProgressCircular, ] } */
        // @ts-ignore
        const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ indeterminate: (true), color: ("primary"), ...{ class: ("ma-5") }, size: ("64"), }));
        const __VLS_21 = __VLS_20({ indeterminate: (true), color: ("primary"), ...{ class: ("ma-5") }, size: ("64"), }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    }
    else {
        const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.VDataTable;
        /** @type { [typeof __VLS_components.VDataTable, typeof __VLS_components.vDataTable, typeof __VLS_components.VDataTable, typeof __VLS_components.vDataTable, ] } */
        // @ts-ignore
        const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ headers: ((__VLS_ctx.headers)), items: ((__VLS_ctx.shiftLogs)), search: ((__VLS_ctx.search)), }));
        const __VLS_27 = __VLS_26({ headers: ((__VLS_ctx.headers)), items: ((__VLS_ctx.shiftLogs)), search: ((__VLS_ctx.search)), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { top: __VLS_thisSlot } = __VLS_nonNullable(__VLS_30.slots);
            const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.VToolbar;
            /** @type { [typeof __VLS_components.VToolbar, typeof __VLS_components.vToolbar, typeof __VLS_components.VToolbar, typeof __VLS_components.vToolbar, ] } */
            // @ts-ignore
            const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ flat: (true), }));
            const __VLS_33 = __VLS_32({ flat: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
            const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.VToolbarTitle;
            /** @type { [typeof __VLS_components.VToolbarTitle, typeof __VLS_components.vToolbarTitle, typeof __VLS_components.VToolbarTitle, typeof __VLS_components.vToolbarTitle, ] } */
            // @ts-ignore
            const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({}));
            const __VLS_39 = __VLS_38({}, ...__VLS_functionalComponentArgsRest(__VLS_38));
            __VLS_nonNullable(__VLS_42.slots).default;
            var __VLS_42;
            const __VLS_43 = __VLS_resolvedLocalAndGlobalComponents.VSpacer;
            /** @type { [typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ] } */
            // @ts-ignore
            const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({}));
            const __VLS_45 = __VLS_44({}, ...__VLS_functionalComponentArgsRest(__VLS_44));
            const __VLS_49 = __VLS_resolvedLocalAndGlobalComponents.VTextField;
            /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */
            // @ts-ignore
            const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ modelValue: ((__VLS_ctx.search)), appendIcon: ("mdi-magnify"), label: ("Search"), singleLine: (true), hideDetails: (true), }));
            const __VLS_51 = __VLS_50({ modelValue: ((__VLS_ctx.search)), appendIcon: ("mdi-magnify"), label: ("Search"), singleLine: (true), hideDetails: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
            __VLS_nonNullable(__VLS_36.slots).default;
            var __VLS_36;
        }
        var __VLS_30;
    }
    __VLS_nonNullable(__VLS_12.slots).default;
    var __VLS_12;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['ma-5'];
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
            search: search,
            shiftLogs: shiftLogs,
            headers: headers,
            loading: loading,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
