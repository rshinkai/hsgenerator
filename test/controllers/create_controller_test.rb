require 'test_helper'

class CreateControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get create_index_url
    assert_response :success
  end

end
