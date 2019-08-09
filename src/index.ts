import {Arkvatar} from "./arkvatar";

export * from './arkvatar';

(async () => {
    const responseVerify = await Arkvatar.verify("ARVNmpr14oh1X3Ee31TVF4vQr2QmfXvbwE");
    console.log(responseVerify);
})();
