import type {CustomElement, Package} from "custom-elements-manifest";
import fs from "node:fs";

const file = fs.readFileSync('dist/custom-elements.json');
const manifest = JSON.parse(file.toString()) as Package;

const getCssPartsReferenceContent = () => {
  let content = '# CSS Parts API Reference\n'

  manifest.modules
    .filter(
      (module) =>
        !(module.path.startsWith('src/icon/') || module.path.startsWith('src/icons/')) && !!module.declarations?.length
    )
    .forEach((module) => {
      if (!module.exports)
        throw new Error(`Module has no export: ${module.path}`);

      const component = module.declarations?.[0] as CustomElement;

      if (
        !component ||
        !component.tagName ||
        !component.tagName.startsWith('tap')
      ) {
        return;
      }


      if (!!component.cssParts?.length) {
        content += `\n## \`${component.tagName}\`\n\n`;
        content += '| Name | Description |\n';
        content += '| ---- | ---- |\n';

        component.cssParts.forEach((cssPart) => {
          content += `| ${cssPart.name} | ${cssPart.description} |\n`;
        });
      }

    });
  return content;
}

export default getCssPartsReferenceContent
