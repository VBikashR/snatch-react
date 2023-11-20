import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Seperator from "./Seperator";

export default {
  title: "ReactComponentLibrary/Seperator",
  component: Seperator,
} as Meta<typeof Seperator>;

const Template: StoryFn<typeof Seperator> = (args) => <Seperator {...args} />;

export const Horizontal = () => (
  <div>
    <h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
      mollitia quibusdam et excepturi hic voluptates illum, maiores sint
      officiis ex possimus! Ex, vel quia eos nam fuga est in accusantium!
    </h3>
    <Template />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem
      fuga rem nostrum blanditiis placeat voluptate voluptates doloremque
      expedita, tempore illo ipsa eos. Inventore at modi quasi, illo esse quae.
    </p>
  </div>
);
Horizontal.storyName = "Horizontal seperator";

export const Vertical = () => (
  <div style={{ display: "flex", gap: "1rem" }}>
    <h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
      mollitia quibusdam et excepturi hic voluptates illum, maiores sint
      officiis ex possimus! Ex, vel quia eos nam fuga est in accusantium!
    </h3>
    <Template />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem
      fuga rem nostrum blanditiis placeat voluptate voluptates doloremque
      expedita, tempore illo ipsa eos. Inventore at modi quasi, illo esse quae.
    </p>
  </div>
);
Vertical.storyName = "Vertical seperator";
