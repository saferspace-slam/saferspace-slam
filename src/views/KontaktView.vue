<script setup lang="ts">
import Content from '@/components/Content.vue';
import InstagramInline from '@/components/InstagramInline.vue';
import PageHeading from '@/components/PageHeading.vue';
import { reactive, ref } from 'vue';

const data = reactive({
    name: "",
    email: "",
    subject: "",
    message: "",
});

const textFields: ["name" | "email" | "subject", string, string, string, boolean][] = [
    ["name", "Name", "Dein Name", "text", false],
    ["email", "Email-Adresse", "Deine Email-Adresse", "email", false],
    ["subject", "Betreff", "Warum schreibst du uns?", "text", true],
]

const inputClasses = "";

const successfullySent = ref(false);
const errorSending = ref(false);

async function submitForm() {
    console.log({ data });
    const response = await fetch("https://email-forms-453803557958.europe-west4.run.app", {
        method: "POST",
        body: JSON.stringify({
            key: "gDdJR6GNwfZ2Kf4GYCyExzNRm78xGvxd",
            form: "Kontaktformular",
            ...data
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    if (response.status === 200) {
        successfullySent.value = true;
        errorSending.value = false;
        data.name = "";
        data.email = "";
        data.subject = "";
        data.message = "";
    } else {
        errorSending.value = true;
        successfullySent.value = false;
    }
}
</script>

<template>
    <Content>
        <PageHeading>Kontakt</PageHeading>
        <div class="flex flex-col gap-2">
            <p class="mb-4"> Hast du Fragen, Ideen, Anmerkungen, Kritik oder Lob?</p>
            <div class="flex items-center gap-[6px]">
                <div class="flex justify-center w-[30px] shrink-0">

                    <a href="mailto:kontakt@saferspace-slam.de">
                        <img src="@/assets/instagram_logo_simple.svg"
                            class="ml-[2px] link-colorize inline relative top-[-0.9px] h-[20px] w-[20px] mr-1" />
                    </a>
                </div>

                <p>
                    Dann kannst du uns gerne auf Instagram schreiben (<a class="text-link underline"
                        href="mailto:kontakt@saferspace-slam.de">saferspace_slam</a>)
                </p>
            </div>
            <div class="flex items-center gap-2">
                <div class="flex justify-center w-[30px] shrink-0">
                    <a href="mailto:kontakt@saferspace-slam.de">
                        <img src="@/assets/mail.svg"
                            class="ml-[2px] link-colorize inline relative top-[-0.9px] h-[24px] w-[24px] mr-1" />
                    </a>
                </div>

                <p>
                    Oder per Mail an <a class="text-link underline"
                        href="mailto:kontakt@saferspace-slam.de">kontakt@saferspace-slam.de</a>
                </p>
            </div>
            <p class="mt-4">Oder du benutzt einfach das Kontaktformular unten.
                Wenn du keine Antwort von uns willst, musst du deinen Namen und deine Email-Adresse auch nicht angeben.
            </p>
        </div>

        <div v-if="successfullySent" class="relative top-7 text-green-700 flex justify-center">
            <p class="text-green-700">Erfolgreich abgeschickt!</p>
        </div>
        <div v-if="errorSending" class="relative top-7 text-red-700 flex justify-center">
            <p class="text-red-700">Fehler beim Senden. Versuche es später nochmal und weise uns gerne per Mail auf diesen Fehler hin.</p>
        </div>

        <form @submit.prevent="submitForm"
            class="flex flex-col gap-2 my-10 lg:my-20 lg:mx-30 bg-white px-6 py-4 rounded-xl shadow-lg shadow-black/20">
            <label class="flex flex-col my-4">
                <span class="text-xs ml-2 text-gray-500">Name</span>
                <input class="border-b-1 border-gray-400 p-2" v-model="data.name" type="text" placeholder="Dein Name" />
            </label>
            <label class="flex flex-col my-4">
                <span class="text-xs ml-2 text-gray-500">Email-Adresse</span>
                <input class="border-b-1 border-gray-400 p-2" v-model="data.email" type="email"
                    placeholder="Deine Email-Adresse" />
            </label>
            <label class="flex flex-col my-4">
                <span class="text-xs ml-2 text-gray-500 required">Betreff</span>
                <input class="border-b-1 border-gray-400 p-2" required v-model="data.subject" type="text"
                    placeholder="Warum schreibst du uns?" />
            </label>
            <label class="flex flex-col my-4">
                <span class="text-xs ml-2 text-gray-600 required">Nachricht</span>
                <textarea class="border-b-1 border-gray-400 p-2 h-40" required v-model="data.message" type="text"
                    placeholder="Deine Nachricht an uns"></textarea>
            </label>
            <button type="submit"
                class="cursor-pointer rounded-lg bg-menu-background text-white py-3 px-4">Senden</button>
        </form>
    </Content>

</template>
<style scoped>
.required:after {
    content: " *";
    color: red;
}
</style>