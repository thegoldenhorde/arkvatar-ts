import {Arkvatar} from "./api";

export * from './api';

(async () => {
    const responseVerify = await Arkvatar.verify("AReg2cp4PFrMW5qZEd3tVRZWgACyyyw1aQ");
    console.log(responseVerify);
    const responseStore = await Arkvatar.store("AHhTn7aATcZm31Fd22rQsEqpEaJEcTiATy4", "Ark");
    console.log(responseStore);
    const responseStoreEth = await Arkvatar.store("0x88F8b3Fe526C785DA8c59A57c3ce751a4dC817c2", "Ethereum");
    console.log(responseStoreEth);

    const responseShow = await Arkvatar.show("0x88F8b3Fe526C785DA8c59A57c3ce751a4dC817c2");
    console.log(responseShow);
})();