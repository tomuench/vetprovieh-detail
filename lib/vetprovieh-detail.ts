import {
  VetproviehElement,
  WebComponent,
} from '@tomuench/vetprovieh-shared/lib/index';
import { VetproviehBasicDetail } from './vetprovieh-basic-detail';
/**
 * `vetprovieh-detail`
 * Detail-Frame for Read, Create and Update Entities. Used in Vet:Provieh.
 *
 * @customElement
 */
@WebComponent({
  template: VetproviehElement.template + ` 
  <form id="form">
      <vetprovieh-notification id="notification">
      </vetprovieh-notification>
      <div id="detail" class="container">
      
      </div>
      <hr/>
      <div class="container">
      <div class="columns is-mobile">
          <div class="column">
              <input id="abortButton" 
                      class="button is-light is-fullwidth" 
                      type="reset" value="Zurück">                   
          </div>
          
          \${this.destroyButton}
          
          <div class="column">
              <input id="saveButton" 
                      class="button is-success is-fullwidth" 
                      type="button" value="Speichern">
          </div>
      </div>
      </div>
  </form>
  `,
  tag: 'vetprovieh-detail'
})
export class VetproviehDetail extends VetproviehBasicDetail {
}
