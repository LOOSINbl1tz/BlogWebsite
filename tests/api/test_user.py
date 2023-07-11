import pytest

# This client will be reponsible for implementing post, get,put and delete requests.
# User django default db i.e blogdb in psql server.
# Make sure every function starts with test as registered in pytest.ini
# @pytest.mark.django_db
# def test_login_user(get_token):
#     assert get_token['access'] != ""

@pytest.mark.django_db
def test_access_blog(keep_auth):
    res = keep_auth.get("/blog/getblog/")
    assert res.status_code == 200