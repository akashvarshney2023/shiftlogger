import { reactive } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Options for dropdowns
const shiftOptions = ["Morning", "AfterNoon", "Night"];
const inchargeOptions = ["supervisor_a", "supervisor_b"];
const teamOptions = ["team1", "team2"];
const lineOptions = ["line1", "line2", "line3"];
const maintenanceOptions = ["Am", "PM", "CPM"];
// Reactive form object
const form = reactive({
    date: "",
    shift: "",
    incharge: "",
    team: "",
    line: "",
    breakdownDetails: "",
    startTime: "",
    endTime: "",
    solution: "",
    remarks: "",
    maintenance: "",
    checkbox: false,
});
// Errors object
const errors = reactive({});
// Reset form
const resetForm = () => {
    Object.keys(form).forEach((key) => {
        form[key] = Array.isArray(form[key]) ? [] : "";
        if (key === "checkbox")
            form[key] = false;
    });
};
// Simple validation function
const validateForm = () => {
    Object.keys(form).forEach((key) => {
        if (!form[key] && key !== "checkbox") {
            errors[key] = "This field is required.";
        }
        else {
            errors[key] = "";
        }
    });
    return Object.values(errors).every((error) => error === "");
};
// Handle form submission
const submit = async () => {
    if (validateForm()) {
        try {
            const response = await fetch("https://api-shiftlogger-dev-001.azurewebsites.net/api/ShiftLog", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });
            if (!response.ok) {
                throw new Error("Failed to save data.");
            }
            alert("Form submitted successfully.");
            resetForm();
            Object.keys(errors).forEach((key) => (errors[key] = "")); // Clear errors after submission
        }
        catch (error) {
            console.error(error);
            alert("An error occurred while submitting the form.");
        }
    }
    else {
        alert("Please fill all required fields.");
    }
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
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ ...{ class: ("p-6") }, }));
    const __VLS_9 = __VLS_8({ ...{ class: ("p-6") }, }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.VCardTitle;
    /** @type { [typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ] } */
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ ...{ class: ("text-h5") }, }));
    const __VLS_15 = __VLS_14({ ...{ class: ("text-h5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    __VLS_nonNullable(__VLS_18.slots).default;
    var __VLS_18;
    const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.VDivider;
    /** @type { [typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, ] } */
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ ...{ class: ("mb-4") }, }));
    const __VLS_21 = __VLS_20({ ...{ class: ("mb-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({}));
    const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
    const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ cols: ("12"), md: ("6"), }));
    const __VLS_33 = __VLS_32({ cols: ("12"), md: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ modelValue: ((__VLS_ctx.form.date)), label: ("Date"), type: ("datetime-local"), errorMessages: ((__VLS_ctx.errors.date)), outlined: (true), dense: (true), clearable: (true), }));
    const __VLS_39 = __VLS_38({ modelValue: ((__VLS_ctx.form.date)), label: ("Date"), type: ("datetime-local"), errorMessages: ((__VLS_ctx.errors.date)), outlined: (true), dense: (true), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_38));
    const __VLS_43 = __VLS_resolvedLocalAndGlobalComponents.VSelect;
    /** @type { [typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, ] } */
    // @ts-ignore
    const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({ modelValue: ((__VLS_ctx.form.shift)), items: ((__VLS_ctx.shiftOptions)), label: ("Shift"), errorMessages: ((__VLS_ctx.errors.shift)), outlined: (true), dense: (true), }));
    const __VLS_45 = __VLS_44({ modelValue: ((__VLS_ctx.form.shift)), items: ((__VLS_ctx.shiftOptions)), label: ("Shift"), errorMessages: ((__VLS_ctx.errors.shift)), outlined: (true), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
    const __VLS_49 = __VLS_resolvedLocalAndGlobalComponents.VSelect;
    /** @type { [typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, ] } */
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ modelValue: ((__VLS_ctx.form.incharge)), label: ("Incharge"), items: ((__VLS_ctx.inchargeOptions)), itemText: ("label"), itemValue: ("value"), errorMessages: ((__VLS_ctx.errors.incharge)), outlined: (true), dense: (true), }));
    const __VLS_51 = __VLS_50({ modelValue: ((__VLS_ctx.form.incharge)), label: ("Incharge"), items: ((__VLS_ctx.inchargeOptions)), itemText: ("label"), itemValue: ("value"), errorMessages: ((__VLS_ctx.errors.incharge)), outlined: (true), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    const __VLS_55 = __VLS_resolvedLocalAndGlobalComponents.VSelect;
    /** @type { [typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, ] } */
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ modelValue: ((__VLS_ctx.form.team)), label: ("Team"), items: ((__VLS_ctx.teamOptions)), itemText: ("label"), itemValue: ("value"), errorMessages: ((__VLS_ctx.errors.team)), outlined: (true), dense: (true), }));
    const __VLS_57 = __VLS_56({ modelValue: ((__VLS_ctx.form.team)), label: ("Team"), items: ((__VLS_ctx.teamOptions)), itemText: ("label"), itemValue: ("value"), errorMessages: ((__VLS_ctx.errors.team)), outlined: (true), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    const __VLS_61 = __VLS_resolvedLocalAndGlobalComponents.VSelect;
    /** @type { [typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, ] } */
    // @ts-ignore
    const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ modelValue: ((__VLS_ctx.form.line)), label: ("Line"), items: ((__VLS_ctx.lineOptions)), itemText: ("label"), itemValue: ("value"), errorMessages: ((__VLS_ctx.errors.line)), outlined: (true), dense: (true), }));
    const __VLS_63 = __VLS_62({ modelValue: ((__VLS_ctx.form.line)), label: ("Line"), items: ((__VLS_ctx.lineOptions)), itemText: ("label"), itemValue: ("value"), errorMessages: ((__VLS_ctx.errors.line)), outlined: (true), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
    const __VLS_67 = __VLS_resolvedLocalAndGlobalComponents.VTextarea;
    /** @type { [typeof __VLS_components.VTextarea, typeof __VLS_components.vTextarea, typeof __VLS_components.VTextarea, typeof __VLS_components.vTextarea, ] } */
    // @ts-ignore
    const __VLS_68 = __VLS_asFunctionalComponent(__VLS_67, new __VLS_67({ modelValue: ((__VLS_ctx.form.breakdownDetails)), label: ("Breakdown Details"), errorMessages: ((__VLS_ctx.errors.breakdownDetails)), outlined: (true), dense: (true), }));
    const __VLS_69 = __VLS_68({ modelValue: ((__VLS_ctx.form.breakdownDetails)), label: ("Breakdown Details"), errorMessages: ((__VLS_ctx.errors.breakdownDetails)), outlined: (true), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
    __VLS_nonNullable(__VLS_36.slots).default;
    var __VLS_36;
    const __VLS_73 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({ cols: ("12"), md: ("6"), }));
    const __VLS_75 = __VLS_74({ cols: ("12"), md: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_74));
    const __VLS_79 = __VLS_resolvedLocalAndGlobalComponents.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */
    // @ts-ignore
    const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({ modelValue: ((__VLS_ctx.form.startTime)), label: ("Start Time"), type: ("datetime-local"), errorMessages: ((__VLS_ctx.errors.startTime)), outlined: (true), dense: (true), clearable: (true), }));
    const __VLS_81 = __VLS_80({ modelValue: ((__VLS_ctx.form.startTime)), label: ("Start Time"), type: ("datetime-local"), errorMessages: ((__VLS_ctx.errors.startTime)), outlined: (true), dense: (true), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_80));
    const __VLS_85 = __VLS_resolvedLocalAndGlobalComponents.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */
    // @ts-ignore
    const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ modelValue: ((__VLS_ctx.form.endTime)), label: ("End Time"), type: ("datetime-local"), errorMessages: ((__VLS_ctx.errors.endTime)), outlined: (true), dense: (true), clearable: (true), }));
    const __VLS_87 = __VLS_86({ modelValue: ((__VLS_ctx.form.endTime)), label: ("End Time"), type: ("datetime-local"), errorMessages: ((__VLS_ctx.errors.endTime)), outlined: (true), dense: (true), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
    const __VLS_91 = __VLS_resolvedLocalAndGlobalComponents.VTextarea;
    /** @type { [typeof __VLS_components.VTextarea, typeof __VLS_components.vTextarea, typeof __VLS_components.VTextarea, typeof __VLS_components.vTextarea, ] } */
    // @ts-ignore
    const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({ modelValue: ((__VLS_ctx.form.solution)), label: ("Solution Done"), errorMessages: ((__VLS_ctx.errors.solution)), outlined: (true), dense: (true), }));
    const __VLS_93 = __VLS_92({ modelValue: ((__VLS_ctx.form.solution)), label: ("Solution Done"), errorMessages: ((__VLS_ctx.errors.solution)), outlined: (true), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_92));
    const __VLS_97 = __VLS_resolvedLocalAndGlobalComponents.VTextarea;
    /** @type { [typeof __VLS_components.VTextarea, typeof __VLS_components.vTextarea, typeof __VLS_components.VTextarea, typeof __VLS_components.vTextarea, ] } */
    // @ts-ignore
    const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({ modelValue: ((__VLS_ctx.form.remarks)), label: ("Remarks"), errorMessages: ((__VLS_ctx.errors.remarks)), outlined: (true), dense: (true), }));
    const __VLS_99 = __VLS_98({ modelValue: ((__VLS_ctx.form.remarks)), label: ("Remarks"), errorMessages: ((__VLS_ctx.errors.remarks)), outlined: (true), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_98));
    __VLS_nonNullable(__VLS_78.slots).default;
    var __VLS_78;
    __VLS_nonNullable(__VLS_30.slots).default;
    var __VLS_30;
    const __VLS_103 = __VLS_resolvedLocalAndGlobalComponents.VDivider;
    /** @type { [typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, ] } */
    // @ts-ignore
    const __VLS_104 = __VLS_asFunctionalComponent(__VLS_103, new __VLS_103({ ...{ class: ("my-4") }, }));
    const __VLS_105 = __VLS_104({ ...{ class: ("my-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_104));
    const __VLS_109 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
    // @ts-ignore
    const __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109({}));
    const __VLS_111 = __VLS_110({}, ...__VLS_functionalComponentArgsRest(__VLS_110));
    const __VLS_115 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_116 = __VLS_asFunctionalComponent(__VLS_115, new __VLS_115({ cols: ("12"), md: ("6"), }));
    const __VLS_117 = __VLS_116({ cols: ("12"), md: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_116));
    const __VLS_121 = __VLS_resolvedLocalAndGlobalComponents.VSelect;
    /** @type { [typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, typeof __VLS_components.VSelect, typeof __VLS_components.vSelect, ] } */
    // @ts-ignore
    const __VLS_122 = __VLS_asFunctionalComponent(__VLS_121, new __VLS_121({ modelValue: ((__VLS_ctx.form.maintenance)), label: ("Preventive Maintenance"), items: ((__VLS_ctx.maintenanceOptions)), itemText: ("label"), itemValue: ("value"), errorMessages: ((__VLS_ctx.errors.maintenance)), outlined: (true), dense: (true), }));
    const __VLS_123 = __VLS_122({ modelValue: ((__VLS_ctx.form.maintenance)), label: ("Preventive Maintenance"), items: ((__VLS_ctx.maintenanceOptions)), itemText: ("label"), itemValue: ("value"), errorMessages: ((__VLS_ctx.errors.maintenance)), outlined: (true), dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_122));
    __VLS_nonNullable(__VLS_120.slots).default;
    var __VLS_120;
    const __VLS_127 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_128 = __VLS_asFunctionalComponent(__VLS_127, new __VLS_127({ cols: ("12"), md: ("6"), }));
    const __VLS_129 = __VLS_128({ cols: ("12"), md: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_128));
    const __VLS_133 = __VLS_resolvedLocalAndGlobalComponents.VCheckbox;
    /** @type { [typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, typeof __VLS_components.VCheckbox, typeof __VLS_components.vCheckbox, ] } */
    // @ts-ignore
    const __VLS_134 = __VLS_asFunctionalComponent(__VLS_133, new __VLS_133({ modelValue: ((__VLS_ctx.form.checkbox)), label: ("Checklist Completed"), errorMessages: ((__VLS_ctx.errors.checkbox)), }));
    const __VLS_135 = __VLS_134({ modelValue: ((__VLS_ctx.form.checkbox)), label: ("Checklist Completed"), errorMessages: ((__VLS_ctx.errors.checkbox)), }, ...__VLS_functionalComponentArgsRest(__VLS_134));
    __VLS_nonNullable(__VLS_132.slots).default;
    var __VLS_132;
    __VLS_nonNullable(__VLS_114.slots).default;
    var __VLS_114;
    const __VLS_139 = __VLS_resolvedLocalAndGlobalComponents.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */
    // @ts-ignore
    const __VLS_140 = __VLS_asFunctionalComponent(__VLS_139, new __VLS_139({}));
    const __VLS_141 = __VLS_140({}, ...__VLS_functionalComponentArgsRest(__VLS_140));
    const __VLS_145 = __VLS_resolvedLocalAndGlobalComponents.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */
    // @ts-ignore
    const __VLS_146 = __VLS_asFunctionalComponent(__VLS_145, new __VLS_145({ cols: ("12"), ...{ class: ("text-end") }, }));
    const __VLS_147 = __VLS_146({ cols: ("12"), ...{ class: ("text-end") }, }, ...__VLS_functionalComponentArgsRest(__VLS_146));
    const __VLS_151 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_152 = __VLS_asFunctionalComponent(__VLS_151, new __VLS_151({ ...{ 'onClick': {} }, color: ("primary"), ...{ class: ("me-2") }, outlined: (true), }));
    const __VLS_153 = __VLS_152({ ...{ 'onClick': {} }, color: ("primary"), ...{ class: ("me-2") }, outlined: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_152));
    let __VLS_157;
    const __VLS_158 = {
        onClick: (__VLS_ctx.submit)
    };
    let __VLS_154;
    let __VLS_155;
    const __VLS_159 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
    /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
    // @ts-ignore
    const __VLS_160 = __VLS_asFunctionalComponent(__VLS_159, new __VLS_159({ left: (true), }));
    const __VLS_161 = __VLS_160({ left: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_160));
    __VLS_nonNullable(__VLS_164.slots).default;
    var __VLS_164;
    __VLS_nonNullable(__VLS_156.slots).default;
    var __VLS_156;
    const __VLS_165 = __VLS_resolvedLocalAndGlobalComponents.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */
    // @ts-ignore
    const __VLS_166 = __VLS_asFunctionalComponent(__VLS_165, new __VLS_165({ ...{ 'onClick': {} }, color: ("secondary"), outlined: (true), }));
    const __VLS_167 = __VLS_166({ ...{ 'onClick': {} }, color: ("secondary"), outlined: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_166));
    let __VLS_171;
    const __VLS_172 = {
        onClick: (__VLS_ctx.resetForm)
    };
    let __VLS_168;
    let __VLS_169;
    const __VLS_173 = __VLS_resolvedLocalAndGlobalComponents.VIcon;
    /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */
    // @ts-ignore
    const __VLS_174 = __VLS_asFunctionalComponent(__VLS_173, new __VLS_173({ left: (true), }));
    const __VLS_175 = __VLS_174({ left: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_174));
    __VLS_nonNullable(__VLS_178.slots).default;
    var __VLS_178;
    __VLS_nonNullable(__VLS_170.slots).default;
    var __VLS_170;
    __VLS_nonNullable(__VLS_150.slots).default;
    var __VLS_150;
    __VLS_nonNullable(__VLS_144.slots).default;
    var __VLS_144;
    __VLS_nonNullable(__VLS_12.slots).default;
    var __VLS_12;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['text-h5'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['my-4'];
    __VLS_styleScopedClasses['text-end'];
    __VLS_styleScopedClasses['me-2'];
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
            shiftOptions: shiftOptions,
            inchargeOptions: inchargeOptions,
            teamOptions: teamOptions,
            lineOptions: lineOptions,
            maintenanceOptions: maintenanceOptions,
            form: form,
            errors: errors,
            resetForm: resetForm,
            submit: submit,
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
