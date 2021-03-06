/**
 * POC test for automated UI tests for ALMighty
 *  Story: Display and Update Work Item Details
 *  https://github.com/almighty/almighty-core/issues/298
 *
 * Note on screen resolutions - See: http://www.itunesextractor.com/iphone-ipad-resolution.html
 * Tests will be run on these resolutions:
 * - iPhone6s - 375x667
 * - iPad air - 768x1024
 * - Desktop -  1920x1080
 *
 * beforeEach will set the mode to phone. Any tests requiring a different resolution will must set explicitly.
 *
 * @author naina-verma
 */

var WorkItemListPage = require('./page-objects/work-item-list.page'),
  testSupport = require('./testSupport');

describe('Work item list', function () {
  var page, items, startCount, browserMode;

var until = protractor.ExpectedConditions;
var waitTime = 30000;

  beforeEach(function () {
    testSupport.setBrowserMode('phone');
    page = new WorkItemListPage(true);
    page.allWorkItems.count().then(function(originalCount) { startCount = originalCount; });
  });
/**Test searching user in the assignee drop down  */
  it('Test searching user in the assignee drop down -phone ', function() {
      var workItemTitle = "The test workitem title";
      var workItemUpdatedTitle = "The test workitem title - UPDATED";
      page.clickWorkItemQuickAdd();
      page.typeQuickAddWorkItemTitle(workItemTitle);
      page.clickQuickAddSave().then(function() {
      page.workItemViewId(page.workItemByTitle(workItemTitle)).getText().then(function (text) {
      var detailPage = page.clickWorkItemTitle(page.firstWorkItem, text);
      detailPage.workItemDetailAssigneeIcon().click();
      detailPage.setWorkItemDetailAssigneeSearch("Harry Potter",false);
      detailPage.clickAssignedUserDropDownList("Harry Potter");
      expect(detailPage.details_assigned_user().getText()).toContain("Harry Potter");
      detailPage.clickWorkItemDetailCloseButton();
      page.clickWorkItemTitle(page.firstWorkItem, text);
      expect(detailPage.details_assigned_user().getText()).toContain("Harry Potter");
      detailPage.clickWorkItemDetailCloseButton();
      });
    });
  }); 
  /**Test able to click assigne button Icon  */
  it('Test able to click assigne button Icon -phone ', function() {
      var workItemTitle = "The test workitem title";
      var workItemUpdatedTitle = "The test workitem title - UPDATED";
      page.clickWorkItemQuickAdd();
      page.typeQuickAddWorkItemTitle(workItemTitle);
      page.clickQuickAddSave().then(function() {
      page.workItemViewId(page.workItemByTitle(workItemTitle)).getText().then(function (text) {
      var detailPage = page.clickWorkItemTitle(page.firstWorkItem, text);
      expect(detailPage.workItemDetailAssigneeIcon().click()).toBe(null);
      detailPage.setWorkItemDetailAssigneeSearch("Harry Potter",false);
      detailPage.clickAssignedUserDropDownList("Harry Potter");
      expect(detailPage.details_assigned_user().getText()).toContain("Harry Potter");
      detailPage.clickWorkItemDetailCloseButton();
      });
    });
  }); 
  /**Test to update the assigned user */ 
  it('Test to update the assigned user  -phone ', function() {
      page.workItemViewId(page.firstWorkItem).getText().then(function (text) { 
      var detailPage = page.clickWorkItemTitle(page.firstWorkItem, text);
      detailPage.workItemDetailAssigneeIcon().click();
      detailPage.setWorkItemDetailAssigneeSearch("Walter Mitty",false);
      detailPage.clickAssignedUserDropDownList("Walter Mitty");
      expect(detailPage.details_assigned_user().getText()).toContain("Walter Mitty");
      detailPage.clickWorkItemDetailCloseButton();
      page.clickWorkItemTitle(page.firstWorkItem, text);
      expect(detailPage.workItemDetailAssigneeName().getText()).toBe('Walter Mitty');
      });
  }); 
   
 /**User can read , update , remove assignee  */
   it('User can read , update , remove assignee  -phone ', function() {
      var workItemTitle = "The test workitem title";
      var workItemUpdatedTitle = "The test workitem title - UPDATED";
      page.clickWorkItemQuickAdd();
      page.typeQuickAddWorkItemTitle(workItemTitle);
      page.clickQuickAddSave().then(function() {
      page.workItemViewId(page.workItemByTitle(workItemTitle)).getText().then(function (text) {
      var detailPage = page.clickWorkItemTitle(page.firstWorkItem, text);
      detailPage.workItemDetailAssigneeIcon().click();
      detailPage.setWorkItemDetailAssigneeSearch("Harry Potter",false);
      detailPage.clickAssignedUserDropDownList("Harry Potter");
      expect(detailPage.details_assigned_user().getText()).toContain("Harry Potter");
      detailPage.details_assigned_user().click();
      detailPage.clickworkItemDetailUnassignButton();
      expect(detailPage.workItemDetailAssigneeNameClickable().getText()).toBe('Unassigned');
      });
    });
  }); 
 /**User can Cancel assignee  */
   it('User can Cancel assignee -phone ', function() {
      var workItemTitle = "The test workitem title";
      var workItemUpdatedTitle = "The test workitem title - UPDATED";
      page.clickWorkItemQuickAdd();
      page.typeQuickAddWorkItemTitle(workItemTitle);
      page.clickQuickAddSave().then(function() {
      page.workItemViewId(page.workItemByTitle(workItemTitle)).getText().then(function (text) {
      var detailPage = page.clickWorkItemTitle(page.firstWorkItem, text);
      detailPage.workItemDetailAssigneeIcon().click();
      detailPage.setWorkItemDetailAssigneeSearch("Harry Potter",false);
      detailPage.clickAssignedUserDropDownList("Harry Potter");
      expect(detailPage.details_assigned_user().getText()).toContain("Harry Potter");
      detailPage.details_assigned_user().click();
      detailPage.clickworkItemDetailCancelButton();
      expect(detailPage.details_assigned_user().getText()).toContain("Harry Potter");
      detailPage.clickWorkItemDetailCloseButton();
      page.clickWorkItemTitle(page.firstWorkItem, text);
      expect(detailPage.details_assigned_user().getText()).toContain("Harry Potter");
      });
    });
  }); 

  /**User can read , update , remove assignee  */
    it('User can read , update , remove assignee -phone ', function() {
      var workItemTitle = "The test workitem title";
      var workItemUpdatedTitle = "The test workitem title - UPDATED";
      page.clickWorkItemQuickAdd();
      page.typeQuickAddWorkItemTitle(workItemTitle);
      page.clickQuickAddSave().then(function() {
      page.workItemViewId(page.workItemByTitle(workItemTitle)).getText().then(function (text) {
      var detailPage = page.clickWorkItemTitle(page.firstWorkItem, text);
      detailPage.workItemDetailAssigneeIcon().click();
      detailPage.setWorkItemDetailAssigneeSearch("Harry Potter",false);
      detailPage.clickAssignedUserDropDownList("Harry Potter");
      expect(detailPage.details_assigned_user().getText()).toContain("Harry Potter");
      detailPage.details_assigned_user().click();
      detailPage.setWorkItemDetailAssigneeSearch("Walter Mitty",false);
      detailPage.clickAssignedUserDropDownList("Walter Mitty");
      detailPage.details_assigned_user().click();
      detailPage.clickworkItemDetailCancelButton();
      expect(detailPage.details_assigned_user().getText()).toContain("Walter Mitty");
      });
    });
  });
  /**Test name and avatar are shown up in the drop down */ 
  it('Test name and avatar are shown up in the drop down -phone ', function() {
      page.workItemViewId(page.firstWorkItem).getText().then(function (text) { 
      var detailPage = page.clickWorkItemTitle(page.firstWorkItem, text);
      detailPage.workItemDetailAssigneeIcon().click();
      detailPage.setWorkItemDetailAssigneeSearch("Walter Mitty",false);
      detailPage.clickAssignedUserDropDownList("Walter Mitty");
      expect(detailPage.details_assigned_user().getText()).toContain("Walter Mitty");
      expect(detailPage.workItemDetailAvatar().isPresent()).toBe(true);
      expect(detailPage.workItemDetailUnAssigneeIcon().isPresent()).toBe(false);
      detailPage.clickWorkItemDetailCloseButton();
     });
  }); 
});
